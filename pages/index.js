import {useEffect} from 'react'
import {Box, Button} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {useMoralis} from "react-moralis";

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  const router = useRouter();

  useEffect(()=> {
    if(!isAuthenticated) {
      router.replace('/login')
    }
  }, [isAuthenticated, router])

  
  

  return (
    <Box>
      <Button m={2} colorScheme="teal" color="gray.700" onClick={logout}>
        Logout
      </Button>
    </Box>
  )
}
