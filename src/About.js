import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from "yup";
export function About() {
  const all = [{
    profile: "https://cdn.mos.cms.futurecdn.net/xz4NVQhHaHShErxar7YLn.jpg"
  },
  {
    profile: "https://www.logocentral.info/wp-content/uploads/2020/02/Rolls-Royce-Logo-1920X1080.png"
  },
  {
    profile: "https://www.clipartkey.com/mpngs/m/189-1893837_mercedes-benz-logo-round.png"
  },
  {
    profile: "https://c4.wallpaperflare.com/wallpaper/114/631/730/logo-emblem-propeller-wallpaper-preview.jpg"
  },
  {
    profile: "https://m.media-amazon.com/images/I/61nRMajPh-L._SL1280_.jpg"
  },
  {
    profile: "https://logo-all.ru/uploads/posts/2016-03/0_tata_logo.jpg"
  },
  {
    profile: "https://www.freepnglogos.com/uploads/hyundai-logo-10.jpg"
  }];
  
  return (
    <div className='home'>
      <div className='kill'>
        <h1><b>HURRY UP </b></h1>
        <h2>OFFER CLOSES SOON!</h2>
      </div>
      
      <h1>BOOKINGS OPEN!</h1>
      <Basicform/>
      <h2 className="leo">OUR BRAND OF PARTNERS</h2>
      <div className='brand-list'>
        {all.map((nm) => <Brandey profile={nm.profile} />)}
      </div>

    </div>
  );
}


const formvalidation=yup.object({name:yup.string().required("fill this line"),
birthday:yup.string().required("fill this line"),
occupation:yup.string().required("fill this line"),
phone:yup.string().required("fill this line"),
payment:yup.string().required("fill this line"),
brand:yup.string().required("fill this line"),
series:yup.string().required("fill this line"),
address:yup.string().required("fill this line"),
adhar:yup.string().required("fill this line"),
identity:yup.string().required("fill this line"),
  })


function Basicform(){
const formik =useFormik({ initialValues:{name:"",birthday:"",occupation:"",phone:"",payment:"",brand:"",series:"",address:"",adhar:"",identity:''}, validationSchema:formvalidation,
 onSubmit:(values)=>{console.log("onsubmit",values);} })

  return(
<div>
<form onSubmit={formik.handleSubmit}>
<TextField className='qw' label="Enter the Name" variant="outlined" 
id="name" 
name="name"
 value={formik.values.name} 
 onChange={formik.handleChange}
 onBlur={ formik.handleBlur}
  />
  {formik.touched.name && formik.errors.name ? formik.errors.name :""}
<br/>
<br/>

<TextField  className='qw'   variant="outlined"
id='birthday'
name='birthday'
type="date"
value={formik.values.birthday}
onChange={formik.handleChange}
onBlur={ formik.handleBlur}
 />
 {formik.touched.birthday && formik.errors.birthday ? formik.errors.name :""}
<br/>
<br/>
<TextField  className='qw' label="Enter the Occupation" variant="outlined"
id='occupation'
name='occupation'
type="text"
value={formik.values.occupation}
onChange={formik.handleChange}
onBlur={ formik.handleBlur}
 />
 {formik.touched.occupation && formik.errors.occupation ? formik.errors.name :""}
<br/>
<br/>

<TextField  className='qw' label="Enter the number" variant="outlined"
id='phone'
name='phone'
type="number"
value={formik.values.phone}
onChange={formik.handleChange}
onBlur={ formik.handleBlur}
 />
 {formik.touched.phone && formik.errors.phone ? formik.errors.name :""}
<br/>
<br/>
<TextField  className='qw'  label="Payment Mode" variant="outlined" 
id='payment'
name='payment'
type="text"
value={formik.values.payment}
onChange={formik.handleChange}
onBlur={ formik.handleBlur}
/>
{formik.touched.payment && formik.errors.payment ? formik.errors.name :""}
<br/>
<br/>
<TextField  className='qw'  label="Enter the Brand" variant="outlined"
id="brand" 
name="brand"
 value={formik.values.brand} 
 onChange={formik.handleChange}
 onBlur={ formik.handleBlur}
  />
  {formik.touched.brand && formik.errors.brand? formik.errors.name :""}
 <br/>
<br/>
<TextField  className='qw'  label="Enter the series" variant="outlined"
id="series" 
name="series"
 value={formik.values.series} 
 onChange={formik.handleChange}
 onBlur={ formik.handleBlur}
  />
  {formik.touched.series && formik.errors.series ? formik.errors.name :""}
 <br/>
<br/>
<TextField  className='qw'  label="Enter the address" variant="outlined"
id="address" 
name="address"
 value={formik.values.address} 
 onChange={formik.handleChange}
 onBlur={ formik.handleBlur}
  />
  {formik.touched.address && formik.errors.address? formik.errors.name :""}
   <br/>
<br/>
<TextField  className='qw'  label="Adhar number" variant="outlined"
id="adhar" 
name="adhar"
type="text"
 value={formik.values.adhar} 
 onChange={formik.handleChange}
 onBlur={ formik.handleBlur}
  />
  {formik.touched.adhar && formik.errors.adhar ? formik.errors.name :""}
 <br/>
<br/>
<TextField  className='qw'   variant="outlined"
id="identity" 
name="identity" 
type="file"
 value={formik.values.identity} 
 onChange={formik.handleChange}
 onBlur={ formik.handleBlur}
  />
{formik.touched.identity && formik.errors.identity ? formik.errors.name :""}
    <Button variant="contained"  style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}  type='submit'>submit</Button>
</form>

</div>
  );
}
function Brandey({ profile }) {
  return (
    <div className='allbrands'>
   
      <img src={profile} alt="profile" className='brand-poster'></img>
    </div>
  );
}
