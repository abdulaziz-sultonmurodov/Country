import React from 'react'
import { Link } from 'react-router-dom'
import {countries} from "../data/countryInfo"

const Card = ({searchWord}) => {

    return (
        <main className="flex flex-row flex-wrap my-14">
        
            {countries.filter(country => {
              if(searchWord === "") {
                return country
              } else if (country.name.toLowerCase().includes(searchWord.toLowerCase()) || country.capital.toLowerCase().includes(searchWord.toLowerCase())) {
                  return country
              } 
                
            }).map(country => (
 <div key={country.id} className="p-8 w-full sm:w-1/2 lg:w-1/3">
 <div className="shadow-xl rounded-lg">
   <Link to={`/country/${country.id}`} className="relative flex items-center justify-center"> 
   <img src={country.img} alt={country.capital} className="h-64 bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center hover:brightness-90 transition filter brightness-50" />
     <p className="text-white font-bold absolute text-4xl">{country.capital}</p>
   </Link>
  
   <div className="bg-white rounded-b-lg px-8">
     <div className="pt-8 pb-8">
       <h1 className="text-2xl font-bold text-gray-700">{country.capital}</h1>
       <p className="text-sm text-gray-600">{country.name}</p>
       
       
     
     </div>
   </div>
 </div>
</div>
            ))}
     
      </main>
    )
}

export default Card
