/** 1. declare a variable and assign the input DOM node to it */
const fileInput = document.querySelector("input");

/** 2. add event listener for the input, event would be change */
fileInput.addEventListener("change", getDimensions);

let arrDimensions = [];
function getDimensions() {
  /** 3. loop through our files, for each file */
  const files = this.files;
  for (let file of files) {
    const promise = new Promise((resolve, reject) => {
      /** 4. create a reference to the file with the URL API */
      const src = URL.createObjectURL(file);

      /** 5. create a new Image with the IMAGE API */
      let image = new Image();

      /** 6. set the src of our image to the reference */
      image.src = src;

      //document.body.appendChild(image);

      /** 7. When and how do we now get the dimensions? */
      image.onload = () => {
        resolve({
          width: image.naturalWidth,
          height: image.naturalHeight,
        });
      }; /*
            image.onfail = () => {
                reject()
            };*/
    });

    arrDimensions.push(promise);
  }

  Promise.all(arrDimensions).then((dim) => console.table(dim));
}

//javascript google maps api
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.413, lng: 8.5665 },
    zoom: 15,
  });

  // add a marker
  var marker = new google.maps.Marker({
    position: { lat: 47.4137, lng: 8.5685 },
    map: map,
  });
}

//https://www.google.com/maps/@47.4134968,8.5665887,14.83z

// var marker = new google.maps.Marker({
//   position: { lat: 47.3739089, lng: 8.5328035 },
//   map: map,
// });

// var styledMapType = new google.maps.StyledMapType([JSON styling object],
//     {name: 'Styled Map'});

//     // Create a map object, and include the MapTypeId to add
//     // to the map type control.
//     var map = new google.maps.Map(document.getElementById('map'), {

//       mapTypeControlOptions: {
//         mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
//       }
//     });

//     //Associate the styled map with the MapTypeId and set it to display.
//     map.mapTypes.set('styled_map', styledMapType);
//     map.setMapTypeId('styled_map');
