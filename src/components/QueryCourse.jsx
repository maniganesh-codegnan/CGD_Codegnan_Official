import careerQuery from "../photos/courseQuery/careerQuery.png";
import studentQuery from "../photos/courseQuery/studentQuery.png";

const QueryCourse = () => {
  return (
    <div style={{ marginTop:'20rem'}}>
      <center>
        <div
          className=""
          style={{
            backgroundImage: `url(${careerQuery})`,
            backgroundSize: "cover",
            width:'75%',
            height: '300px',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            position:'relative'
          }}
        >
          <h1 style={{position:'relative', color:'#fff', top:'3rem', left:'-10rem'}}>Still have questions regarding courses?</h1>
          <br />
          
          <br />
          <div>
            <img src={studentQuery} alt="" style={{width:'420px', height:'500px', position:'absolute',top:'-12.5rem', right:'-5rem'}} />
          </div>
          <button style={{position:'relative',top:'8rem', width:'14rem', height:'3.5rem', left:'-11rem', border:'none', borderRadius:'10px', color:'black', fontFamily:'Monda', fontSize:'2rem', backgroundColor:' #ffcc00'}}>
            {" "}
            <i className="fa-solid fa-phone phone"></i>
            <a href="contact" style={{color:'black', fontFamily:'Monda', fontSize:'2rem'}}> Call US </a>
          </button>
        </div>
      </center>
    </div>
  );
};

export default QueryCourse;
