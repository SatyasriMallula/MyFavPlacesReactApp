import React from "react";
import Card from "../favplacecard/placecard";
import styles from './favplaces.module.css';
function Placeslist(){
    const placestovisit=[{'image':"https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&w=1000&q=80",
                     "name":"Taj Mahal",
                      "place":"Agra"},
                      {
                        "image":"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQMyZc8yT8-R1ttLSKUZjOzKYljZrkzpEWJ2VccmEkTLYXiXpecEhkpr4peFGx1cCin",
                        "name":"Water Falls",
                        "place":"Kerala"
                      },
                      {
                        "image":"https://img.traveltriangle.com/blog/wp-content/uploads/2017/07/The-glorious-view-of-iconic-Tiger-hill-in-Dras-ss31072017.jpg",
                        "name":"Tiger Hill",
                        "place":"Ladakh"
                      },
                      {
                        "image":"https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp",
                        "name":"Hill Stations",
                        "place":"Ooty"
                      },
                      {
                        "image":"https://vizagtourism.org.in/images//tourist-places/araku-valley-vizag/araku-valley-vizag-india-tourism-photo-gallery.jpg",
                        "name":"Araku Valley",
                        "place":"vizag"
                      },
                      {
                        "image":"data:image/jpeg;base64,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",
                        "name":"Ellora Caves",
                        "place":" Maharashtra"
                      }

                    ]
                    
    return(
        
        <div className={styles.container}>
           
            {
            placestovisit.map(places=><Card places={places}/>)
            }
        </div>
    );
}
export default Placeslist;