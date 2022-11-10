import React, { FC } from 'react'

export interface ILoginProps {
  email?: string,
  password?: string
}

export const LoginField: FC<ILoginProps> = ({
  email,
  password
}: ILoginProps) => {

  return (
    <div className="login-field">
      <input
        type="text"
        placeholder="Email..."
      />
      <input
        type="password"
        placeholder="Password..." />
      <button>Log In</button>
    </div>
  )
}
