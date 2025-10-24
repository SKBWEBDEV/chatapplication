import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Homef = () => {
  const data = useSelector(state=> (state.information.value))
  console.log(data);
  const [veryfi,setVeryfi] = useState(false)
  const auth = getAuth();

   onAuthStateChanged(auth, (user) => {
  if (user.emailVerified) {
    console.log(user);
    setVeryfi(true)
  } else {
    setVeryfi(false)
  }
});
  return (
    <div>
      {
        veryfi ? <p>Home</p> : <h6>please veryfi your email</h6>
      }
    </div>
  )
}

export default Homef