import { useRouter } from 'next/router';
import Head from 'next/head';
const DynamicRoute = () => {
 const router = useRouter();

 const query = router.query.dynamic;
 return (
  <>
   <Head>
    <title>{query}</title>
   </Head>
   <div> I am a Dynamic Route</div>;
  </>
 );
};

export default DynamicRoute;
