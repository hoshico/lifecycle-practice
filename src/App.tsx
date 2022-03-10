import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Todo } from './Todo'
import { UserCard } from './components/UserCard'
import { User } from './types/api/user'
import { UserProfile } from './types/userprofile'

export default function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])
  const [loading, setLoading] = useState<boolean>(false)
  // errorがあるのかどうかの判定
  const [error, setError] = useState<boolean>(false)

  const onClickFetchUser = () => {
    // onClickしたタイミングでloadingはtrueに
    setLoading(true)
    // 関数実行時は判定でerrorは無しにする
    setError(false)
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }))
        setUserProfiles(data)
      })
      .catch(() => {
        // errorがあった場合にtrueにする
        setError(true);
      })
      .finally(() => {
        // 正常でもerrorでもloadingは終了
        setLoading(false)
      })
  }

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  )
}
