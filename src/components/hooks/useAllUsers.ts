import axios from "axios"
import { useState } from "react"
import { User } from "../../types/api/user"
import { UserProfile } from "../../types/userprofile"

// 全ユーザーを一覧で取得するカスタムフック
export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])
  const [loading, setLoading] = useState(false)
  // errorがあるのかどうかの判定
  const [error, setError] = useState(false)

  const getUsers = () => {
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
  };
  return { getUsers, userProfiles, loading, error }
}