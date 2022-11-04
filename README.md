# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



## EXPORTED STEPS FROM WEB-APP PIPELINE (YAML):

### DOCKER BUILD:
    steps:
    - task: Docker@2
    displayName: 'Docker build'
    inputs:
        containerRegistry: 'CICD-ACR'
        repository: 'live-conversation/web-app'
        command: build
        tags: '$(Build.SourceVersion)'


### DOCKER PUSH:
    steps:
    - task: Docker@2
    displayName: 'Docker Push'
    inputs:
        containerRegistry: 'CICD-ACR'
        repository: 'live-conversation/web-app'
        command: push
        tags: '$(Build.SourceVersion)'


### SETTING IMAGE TAG:
    steps:
    - bash: |
    # replace tag in kust-file with git-commit hash-value
    export IMAGE_TAG=$(git rev-parse HEAD)
    envsubst \
        < infra/base/kustomization.template.yaml \
        > infra/base/kustomization.yaml
    displayName: 'Setting image tag'

### KUSTOMIZE (ENVIRONMENTS):
    steps:
    - powershell: |
    # DEV
    ## Create dir on-cloud:
    mkdir $(Build.ArtifactStagingDirectory)/resources
    
    ## Create sub-dir (Dev) on-cloud:
    mkdir $(Build.ArtifactStagingDirectory)/resources/dev
    
    ## Build the Dev-dir (from repo) > save the build on-cloud as 'apply.yaml' (Dev-dir):
    kustomize build $(Build.SourcesDirectory)/infra/overlays/dev > $(Build.ArtifactStagingDirectory)/resources/dev/apply.yaml
    
    
    # Same for QA:
    mkdir $(Build.ArtifactStagingDirectory)/resources/qa
    kustomize build $(Build.SourcesDirectory)/infra/overlays/qa > $(Build.ArtifactStagingDirectory)/resources/qa/apply.yaml
    
    
    # Same for Prod:
    mkdir $(Build.ArtifactStagingDirectory)/resources/prod
    kustomize build $(Build.SourcesDirectory)/infra/overlays/prod > $(Build.ArtifactStagingDirectory)/resources/prod/apply.yaml
    displayName: 'Kustomize (environments)'


### PUBLISH ARTIFACT:
    steps:
    - task: PublishPipelineArtifact@1
    displayName: 'Publish Pipeline Artifact'
    inputs:
        targetPath: '$(Build.ArtifactStagingDirectory)/resources'
        artifact: Deploy



