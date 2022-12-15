
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function Home(){
    return (
        <div>
            <h1>WelCome To Home Page</h1>
            <Button >
              <Link to='/PremiumPlan'>Buy Plan</Link>
            </Button>
        </div>
    )
}