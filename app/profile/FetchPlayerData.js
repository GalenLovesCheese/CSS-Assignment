/* const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImI1YzM3N2ZjLTFlYWUtNDE2ZS1iNzUwLTg2MTAyZTZiNjkzZCIsImlhdCI6MTcwNTQwNzczMiwic3ViIjoiZGV2ZWxvcGVyL2ZiNGE0YjYxLWJlMDEtNTkzNy1hNTMxLTM1ZjhkZjMwMGIzMCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMjIyLjE2NC4xMy4yMjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.27a9IhN8TP6Jbu7c4DG2EuUIgLebYaitQ5cmr58FI_QwxiGXLZeiRq5AOo_VJVHUQJ1a3uEu4Dad8cqu45ApDw";
const playerTag = "80YRY82LG"
fetch(`https://api.brawlstars.com/v1/players/%23${playerTag}`,{
    method: "GET",
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
    }
})
.then(
    response => {
        return response.json();
    }
)
.then(
    data => {
        console.log(data)
    }  
) */
export const FetchPlayerData = async (playerTag, token) => {
    try {
      const response = await fetch(`https://api.brawlstars.com/v1/players/%23${playerTag}`, {
        method: "GET",
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch player profile. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching player profile:', error);
      throw error;
    }
  };

   