import React, { FC } from 'react'

export interface ISignUpProps {
  alias: string,
  email: string,
  password: string
}

export const SignUpField: FC<ISignUpProps> = ({
  alias,
  email,
  password
}: ISignUpProps) => {

  return (
    <div className="signup-field">
      <button>Sign Up</button>
    </div>
  )
}