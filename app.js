const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
const userAge = prompt('How many years have you been on this earth?');   
console.log(`Your name is ${username} and you are ${userAge} years old`);
let userLocation = prompt('Which State do you live in(abbreviation only)?');
    userLocation = userLocation.toUpperCase();
    if (userLocation === 'CT' || userLocation === 'ME' || userLocation === 'MA' || userLocation ==='NH' || userLocation ==='NJ'
        || userLocation =='NY' || userLocation ==='PA' || userLocation ==='RI' || userLocation ==='VT') {
            let nEast = prompt('You live in the North East region of the US! Which city is better New York or Philadelphia?')
            nEast = nEast.toUpperCase();
            if (nEast === 'NEW YORK') {
                let newYork = prompt('Choose one: Pizza or Bagels?');
                newYork = newYork.toUpperCase();
                if (newYork ==='PIZZA') {
                    console.log(`Minerals present in New York City's tap water supply are credited with giving the dough in metro area pizzas its characteristic texture and flavor.`)
                } else if (newYork ==='Bagels') {
                    console.log('The first New York bagels were orginally 1/3rd the size they are today')
                } else {
                    console.log('That wasnt one of the options.')
                }
            } else if (nEast === 'PHILADELPHIA') {
                let philly = prompt('Choose one: Cheesesteak or Soft Pretzels')
                philly = philly.toUpperCase();
                if (philly ==='CHEESESTEAK') {
                    console.log('In 1998, Eagles fans made a 365-foot, 7-inch cheesesteak on a single roll. It weighed 1,790 pounds and was just a few inches longer than a football field.')
                } else if (philly ==='SOFT PRETZELS') {
                    console.log('Philly pretzels are sold on street corners, not in supermarkets')
                } else {
                    console.log('That wasnt one of the options.')
                }
            } else {
                console.log('Thats not New York or Philadelphia, please start over!')
            }
    } else if (userLocation ==='ND' || userLocation ==='SD' || userLocation ==='NE' || userLocation ==='KS'
        || userLocation ==='MN' || userLocation ==='IA' || userLocation ==='MO' || userLocation ==='WI' || userLocation ==='IL'
        || userLocation ==='MI' || userLocation ==='IN' || userLocation ==='OH'){
            let nCentral = prompt('You live in the North Central region of the US! Which city is better Chicago or Kansas City?');
            nCentral = nCentral.toUpperCase();
            if (nCentral === 'CHICAGO') {
                let chicago = prompt('Choose one: Hot Dogs or Cheesecake?')
                chicago = chicago.toUpperCase();
                if (chicago === 'HOT DOGS') {
                    console.log('The Chicago-style hot dog became popular during the Great Depression when it was a cheap, filling meal.');
                } else if (chicago === 'CHEESECAKE') {
                    console.log('The cheesecake was an immediate hit and was the most popular dessert at the first Taste of Chicago in 1980')
                } else {
                    console.log('That wasnt one of the options.')
                }
            } else if (nCentral === 'KANSAS CITY') {
                let kCity = prompt('Choose one: Fried Chicken or Burgers?')
                kCity = kCity.toUpperCase();
                if (kCity === 'FRIED CHICKEN') {
                    console.log('The first recipe for fried chicken was published in 1747 by English cook Hannah Glasse.')
                } else if (kCity ==='BURGERS') {
                    console.log('The first White Castle in Kansas City opened in 1924 at 13 West 19th Street')
                } else {
                    console.log('That wasnt one of the options.')
                }
            } else {
                console.log('Thats not Chicago or Kansas City, please start over!')
            } 
            
    } else if (userLocation ==='TX' || userLocation ==='OK' || userLocation ==='AR' || userLocation ==='LA' || userLocation ==='MS'
        || userLocation ==='AL' || userLocation ==='GA' || userLocation ==='FL' || userLocation ==='SC'
        || userLocation ==='NC' || userLocation ==='VA' || userLocation ==='MD'|| userLocation ==='DC'
        || userLocation ==='DE' || userLocation ==='WV' || userLocation ==='KY' || userLocation ==='TN'){
            let sRegion = prompt('You live in the Southern region of the US! Which city is better Houston or Miami?')
            sRegion = sRegion.toUpperCase();
            if (sRegion  === 'HOUSTON') {
                let houston = prompt('Choose one: NASA or Zoo ?');
                houston = houston.toUpperCase();
                if (houston === 'NASA') {
                    console.log(`NASA's creation was directly related to the pressures of national defense during the Cold War.`)
                } else if (houston ==='ZOO') {
                    console.log('The Houston Zoo houses over 6,000 animals from more than 900 species.')
                } else {
                    console.log('That wasnt one of the options.')
                }
            } else if (sRegion  === 'MIAMI') {
                let miami = prompt('Choose one: Beach or Clubs?')
                miami = miami.toUpperCase();
                if (miami === 'BEACH') {
                    console.log('The majority of the white sand on Miami Beach is not naturally occurring and was imported from the Bahamas and other Caribbean locations.')
                } else if (miami === 'CLUBS') {
                    console.log('Miami has over 600 night clubs to choose from')
                } else {
                    console.log('That wasnt one of the options!')
                }
            } else {
                console.log('Thats not Miami or Houston, please start over!')
            }

    } else if (userLocation ==='WA' || userLocation ==='OR' || userLocation ==='CA' || userLocation ==='NV' || userLocation ==='ID' || userLocation ==='UT'
        || userLocation ==='AZ' || userLocation ==='NM' || userLocation ==='CO' || userLocation ==='WY' || userLocation ==='MT') {
            let wRegion = prompt('You live in the Western region of the US! Which city is better LA or Seattle?')
            wRegion = wRegion.toUpperCase();
            if (wRegion  === 'LA') {
                let la = prompt('Choose one: Tv or Movies?')
                    la = la.toUpperCase();
                    if (la === 'TV') {
                        console.log('The first modern TV, the "picture tube," was invented in 1907 by Boris Rosing. ');
                    } else if ( la === 'MOVIES') {
                        console.log('The first moving picture was filmed in 1888 by Louis Le Prince, and was a two-second clip of his family. ')
                    } else {
                        console.log('That wasnt one of the options!')
                    }
            } else if (wRegion  === 'SEATTLE') {
                let seattle = prompt('Choose one: Live Music or Sunsets ?');
                    seattle = seattle.toUpperCase();
                    if (seattle === 'LIVE MUSIC') {
                        console.log(`Seattle is home to one of the world's most recorded symphony orchestras`)
                    } else if (seattle === 'SUNSETS') {
                        console.log('Sometimes a green flash can be seen just before sunrise or after sunset in Seattle.')
                    } else {
                        console.log('That wasnt one of the options!')
                    }
            } else {
                console.log('Thats not LA or Seattle, please start over!')
            }

    }else{
        console.log('That isnt a state, please start over!')
    }
console.log('AT THE END');