import axios from 'axios'
import { useState } from 'react'
import { Player } from '../../types/api/player'

export const useAllPlayer = () => {
  const [playerData, setPlayerData] = useState<Array<string>>([])
  const getPlayer = () => {
    axios
      .get<Player>(
        'http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&name_part=%27darvish%25%27'
      )
      .then((res) => {
        const name = `名前: ${res.data.search_player_all.queryResults.row.name_display_first_last}`;
        //console.log(`名前: ${res.data.search_player_all.queryResults.row.name_display_first_last}`)
        const birthplace = `出身: ${res.data.search_player_all.queryResults.row.birth_city}`;
        //console.log(`出身: ${res.data.search_player_all.queryResults.row.birth_city}`)
        const belongsTeam = `チーム名: ${res.data.search_player_all.queryResults.row.team_full}`
        //console.log(`チーム名: ${res.data.search_player_all.queryResults.row.team_full}`)
        setPlayerData([name,birthplace,belongsTeam]);
      })
      .catch(() => {})
      .finally(() => {})
  }
  return {playerData, getPlayer }
}
