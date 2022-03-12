import React, { useState } from 'react'
import './App.css'
import { useAllUsers } from './components/hooks/useAllUsers'
import { UserCard } from './components/UserCard'


export default function App() {
  const [status, setStatus] = useState<string>("hello");
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers()

  return (
    <div className="App">
      <h4>{status}</h4>
      <button onClick={() => setStatus('new text')}>change text</button>
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
