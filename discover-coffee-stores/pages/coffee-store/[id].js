import { useRouter } from 'next/router';
import Link from 'next/link';
const CoffeeStore = () => {
 const router = useRouter();
 const id = router.query.id;
 return (
  <div>
   Coffee Store Page {id}{' '}
   <Link href={`https://www.google.com`} target='_blank'>
    Back to Home
   </Link>
  </div>
 );
};
export default CoffeeStore;
