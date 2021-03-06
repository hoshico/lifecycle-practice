import React, { useState } from 'react'
import './App.css'
import { useAllPlayer } from './components/hooks/useAllPlayer';
import { useAllUsers } from './components/hooks/useAllUsers'
import { UserCard } from './components/UserCard'


export default function App() {
  const [status, setStatus] = useState<string>("hello");
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const { getPlayer, playerData} = useAllPlayer();
  const onClickFetchUser = () => getUsers()
  return (
    <div className="App">
      <button onClick={getPlayer}>情報取得</button>
      <p>{playerData[0]}</p>
      <p>{playerData[1]}</p>
      <p>{playerData[2]}</p>
      {/*<h4>{status}</h4>*/}
      {/*<button onClick={() => setStatus('new text')}>change text</button>
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
      )}*/}
    </div>
  )
}
