function buscar(){
    let genero = document.getElementById("genero").value;
    let edad = document.getElementById("edad").value;
    let datos = document.getElementById("datos");
    let resp = document.getElementById("respuesta");
    let canciones = document.getElementById("cancion");
    let peli = document.getElementById("peli");
    
    if(edad != '' && edad >= 0){
        resp.style.visibility = 'visible';
        datos.innerHTML = "Género: " + genero + ", Edad: " + edad;
    
        switch (genero){
            case "Masculino":
                if(edad<=2 && edad>=0){
                    canciones.innerHTML = `
                    <ul>
                        <li>"The Wheels on the Bus"</li>
                        <li>"Old MacDonald Had a Farm"</li>
                        <li>"Baby Shark" - Pinkfong</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>Cars (2006)</li>
                        <li>Finding Nemo (2003)</li>
                        <li>The Many Adventures of Winnie the Pooh (1977)</li>
                    </ul>
                    `;
                } else if(edad<=12 && edad>=3){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Happy" - Pharrell Williams</li>
                        <li>"Can't Stop the Feeling!" - Justin Timberlake</li>
                        <li>"We Will Rock You" - Queen</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>The Incredibles (2004)</li>
                        <li>The Jungle Book (2016)</li>
                        <li>Toy Story (1995)</li>
                    </ul>
                    `;
                } else if(edad<=18 && edad>=13){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Uptown Funk" - Mark Ronson ft. Bruno Mars</li>
                        <li>"Shut Up and Dance" - Walk the Moon</li>
                        <li>"Can't Feel My Face" - The Weeknd</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>The Avengers (2012)</li>
                        <li>The Dark Knight (2008)</li>
                        <li>Spider-Man: Into the Spider-Verse (2018)</li>
                    </ul>
                    `;
                } else if(edad<=35 && edad>=19){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Sweet but Psycho" - Ava Max</li>
                        <li>"Senorita" - Shawn Mendes & Camila Cabello</li>
                        <li>"Old Town Road" - Lil Nas X ft. Billy Ray Cyrus</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>The Shawshank Redemption (1994)</li>
                        <li>Pulp Fiction (1994)</li>
                        <li>The Godfather (1972)</li>
                    </ul>
                    `;
                } else if(edad<=60 && edad>=36){
                    canciones.innerHTML = `
                    <ul>
                        <li>"I Will Always Love You" - Whitney Houston</li>
                        <li>"My Heart Will Go On" - Celine Dion</li>
                        <li>"Unchained Melody" - The Righteous Brothers</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>The Lord of the Rings: The Return of the King (2003)</li>
                        <li>The Lord of the Rings: The Fellowship of the Ring (2001)</li>
                        <li>The Lord of the Rings: The Two Towers (2002)</li>
                    </ul>
                    `;
                } else if(edad>60){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Imagine" - John Lennon</li>
                        <li>"What a Wonderful World" - Louis Armstrong</li>
                        <li>"My Way" - Frank Sinatra</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>Casablanca (1942)</li>
                        <li>The Bridge on the River Kwai (1957)</li>
                        <li>Ben-Hur (1959)</li>
                    </ul>
                    `;
                }
                break;
                
            case "Femenino":
                if(edad<=2){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Twinkle, Twinkle, Little Star"</li>
                        <li>"Let It Go" - Frozen</li>
                        <li>"Do You Want to Build a Snowman?" - Frozen</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>Frozen (2013)</li>
                        <li>Moana (2016)</li>
                        <li>Coco (2017)</li>
                    </ul>
                    `;
                } else if(edad<=12 && edad>=3){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Part of Your World" - The Little Mermaid</li>
                        <li>"Let It Go" - Frozen</li>
                        <li>"A Whole New World" - Aladdin</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>Frozen (2013)</li>
                        <li>The Little Mermaid (1989)</li>
                        <li>The Princess and the Frog (2009)</li>
                    </ul>
                    `;
                } else if(edad<=18 && edad>=13){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Drivers License" - Olivia Rodrigo</li>
                        <li>"Good 4 U" - Olivia Rodrigo</li>
                        <li>"Shake It Off" - Taylor Swift</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>The Fault in Our Stars (2014)</li>
                        <li>The Hunger Games (2012)</li>
                        <li>Mean Girls (2004)</li>
                    </ul>
                    `;
                } else if(edad<=35 && edad>=19){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Thank U, Next" - Ariana Grande</li>
                        <li>"Bad Romance" - Lady Gaga</li>
                        <li>"Rolling in the Deep" - Adele</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>La La Land (2016)</li>
                        <li>Legally Blonde (2001)</li>
                        <li>Crazy Rich Asians (2018)</li>
                    </ul>
                    `;
                } else if(edad<=60 && edad>=36){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Girls Just Want to Have Fun" - Cyndi Lauper</li>
                        <li>"Like a Prayer" - Madonna</li>
                        <li>"I Will Survive" - Gloria Gaynor</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>The Devil Wears Prada (2006)</li>
                        <li>Eat Pray Love (2010)</li>
                        <li>Mamma Mia! (2008)</li>
                    </ul>
                    `;
                } else if(edad>60){
                    canciones.innerHTML = `
                    <ul>
                        <li>"Unchained Melody" - The Righteous Brothers</li>
                        <li>"Que Sera, Sera" - Doris Day</li>
                        <li>"My Way" - Frank Sinatra</li>
                    </ul>
                    `;
                    peli.innerHTML = `
                    <ul>
                        <li>Gone with the Wind (1939)</li>
                        <li>Breakfast at Tiffany’s (1961)</li>
                        <li>The Sound of Music (1965)</li>
                    </ul>
                    `;
                }
                break;
        }
    }
}
function limpiar(){
    let resp = document.getElementById("respuesta");    
    resp.style.visibility = 'hidden';
}