import React from 'react'

// propsのtypeを定義する必要がある
type Props = {
  title: string;
  userId: number;
  completed?: boolean;
};

export const Todo = (props :Props) => {
  const { title, userId, completed = false } = props
  const completeMark = completed ? '[完]' : '[未]'
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
}
