import profilePic from '../assets/profile-pic.jpg';

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fdbf23",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* White Container with Rounded Edges */}
      <div
        style={{
          width: "85%",
          maxWidth: "1200px",
          backgroundColor: "white",
          padding: "4rem",
          borderRadius: "1.5rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Left Content */}
        <div style={{ width: "50%", paddingRight: "2rem" }}>
          <h4 style={{ color: "#fdbf23", fontWeight: "600", marginBottom: "0.5rem" }}>
            SOFTWARE DEVELOPER
          </h4>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Hello, my name is <br /> <span style={{ color: "#2d3748" }}>Netri Shelat</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#4a5568", marginBottom: "1.5rem" }}>
            I specialize in <strong>RPA (UiPath) and .NET Development</strong>, creating
            scalable web applications and automating business processes.
          </p>
          <button
            style={{
              backgroundColor: "#fdbf23",
              color: "black",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              marginRight: "1rem",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Projects
          </button>
          <button
            style={{
              border: "1px solid #4a5568",
              color: "#4a5568",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "white",
            }}
          >
            LinkedIn
          </button>
        </div>

        {/* Right Image with Curved Effect */}
        <div
          style={{
            width: "50%",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: "110%",
              height: "100%",
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "#fdbf23",
              borderTopRightRadius: "1.5rem",
              borderBottomRightRadius: "1.5rem",
              clipPath: "ellipse(70% 50% at 100% 50%)",
            }}
          ></div>
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "90%",
              height: "auto",
              objectFit: "cover",
              position: "relative",
              borderRadius: "1rem",
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </div>



  );
}
export default Home;


  // <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fefcbf' }}>
    //   <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '2.5rem' }}>
    //     <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left' }}>
    //       {/* Container for text and image */}
    //       <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left', flexDirection: 'row', justifyContent: 'space-between' }}>
    //         {/* Left Text Content */}
    //         <div style={{ width: '100%',  paddingRight: '2rem' }}>
    //           <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hello, my name is <br /> Netri Shelat</h2>
    //           <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '1.5rem' }}>
    //             I am a <strong>Software Developer</strong> with expertise in <strong>RPA (UiPath) and .NET Development</strong>.
    //             I build scalable web applications and automate business processes.
    //           </p>
    //           <button style={{ backgroundColor: '#ecc94b', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', marginRight: '1rem' }}>
    //             Projects
    //           </button>
    //           <button style={{ border: '1px solid #4a5568', color: '#4a5568', padding: '0.75rem 1.5rem', borderRadius: '0.5rem' }}>
    //             LinkedIn
    //           </button>
    //         </div>

             {/* /* Right Image */}
             {/* <div style={{ width: '50%', maxWidth: '600px', display: 'flex', justifyContent: 'center', marginTop: '1.5rem',alignItems: 'center', position: 'relative' }}>
              <img
                src={profilePic}
                alt="Profile"
                style={{ width: '12rem', height: '12rem', borderRadius: '50%', border: '4px solid white', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', objectFit: 'cover' }}
              />
            </div> 
          </div>
        </div>    
      </div>
      </div> */}
              