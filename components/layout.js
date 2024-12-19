//Layout of the website
//import useSWR from 'swr'
import Navbar from './navbar'
import Footer from './footer'

// fetcher is a helper function to make api calls. 
// Use this to make things cleaner. just copy/paste it.
// TODO : find a way to hide this in a class adn call as needed?
//const fetcher = (...args) => fetch(...args).then(res => res.json())
 
export default function Layout({ children }) {

  // const { data, error } = useSWR('/api/hello', fetcher)
 
  // if (error) console.log(`Error - ${error}`);
  // if (!data) console.log('Loading Data');
  // if (data) console.log(`Data - ${data.name}`);

  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}