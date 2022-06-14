import React from 'react'

export const MenPage = () => {

    const [Loading, setLoading] = useState(true);
    const [data, setData] = usestate(null);

    useEffect(() =>{
        setLoading(true);

        axios({
            url:"",
            method:"get"
        })
        
    },[])

  return (
    <div></div>
  )
}
