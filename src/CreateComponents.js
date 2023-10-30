{/* Components: */}
function Home() {
    return (
      <div>
        <h1>Velkommen til vores administrationssystem</h1>
        <p>Vi gør det nemt for studerende at tilmelde sig forskellige valgfag. Med vores brugervenlige platform kan studerende nemt navigere og vælge de kurser, der passer bedst til deres studieinteresser og tidsplan. Med et intuitivt design og pålidelig funktionalitet gør vi processen med at vælge og tilmelde sig kurser enkel og bekvem for alle vores brugere.</p>
      </div>
    );
  }
  
  function Students() {
    return <h1>Studerende</h1>;
  }

  function StudentDetail() {
    return <h1>Detaljer om studerende</h1>;
  }

  function Courses() {
    return <h1>Kurser</h1>;
  }

  function CourseDetail() {
    return <h1>Detaljer om kurser</h1>;
  }

  export default Home;
  export { Students, StudentDetail, Courses, CourseDetail };