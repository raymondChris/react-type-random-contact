import {useState, useEffect, useCallback} from 'react'
import './App.css';
import { Card, Loader, Button } from './components'

import {IUserData} from './shared/interfaces'

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userData, setUserData] = useState<IUserData | null>(null)

  const retrieveData = useCallback( async() => {
      setIsLoading(true)
      try {
        const resp = await fetch('https://randomuser.me/api')
        if(resp.status !== 200) {
          throw new Error('Something went wront')
        }
        const respData = await resp.json();
        const getData: IUserData = {
          userFullName: `${respData.results[0].name.first} ${respData.results[0].name.last}`,
          email: `${respData.results[0].email}`,
          birthday: `${new Date(respData.results[0].dob.date).toLocaleDateString('en-GB')}`,
          address: `${respData.results[0].location.street.number} ${respData.results[0].location.street.name}`,
          phone: `${respData.results[0].cell || respData.results[0].phone}`,
          password: `${respData.results[0].login.password}`,
          profilePic: `${respData.results[0].picture.large}`
        }
        setUserData(getData)
        setIsLoading(false)
      } catch(err) {
        console.log(err)
        setUserData(null)
        setIsLoading(false)
      }
  }, [])

  useEffect(() => {
    retrieveData()
  }, [retrieveData])

  return (
    <div className="App">
      {
        isLoading ? <Loader/> :
        userData ?
        <Card
          userFullName={userData.userFullName}
          email={userData.email}
          birthday={userData.birthday}
          address={userData.address}
          phone={userData.phone}
          password={userData.password}
          profilePic={userData.profilePic}
        /> : <h1>No user data</h1>
      }
      <Button
          clicked={retrieveData}
        />
    </div>
  );
}

export default App;
