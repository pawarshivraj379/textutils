
export default function About(props) {
    
    let mystyle = {
    color : props.mode === 'dark'? 'white':'#191970',
    backgroundColor: props.mode === 'dark'?'#3B9C9C':'white',

    }
   
  return (
    <>
    <div>
      <div class="accordion" id="accordionExample" style={mystyle}>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Why we created it?</strong>
      </button>
    </h2>
    <div id="collapseOne" style={mystyle} class="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>TextUtils.com was born in 2014 as part of a learning exercise to practice our programming skills. 
In almost 10 years of existence, we continue to refactor, redesign, improve, and implement new features. 
And we could say that we learned a lot since we started, by including the experience here and in the overall development world.
As long our spirit allows us to continue learning and coding, we will continue improving this website..</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>What does it do?</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>TextUtils.com is described as a central repository of tools for helping with developer activities. 
It includes tools such as for ConvertToUpperCase, ConvertToLowerCase, Word Count, Character Count, Read times, 
Remove Extra space, Copy text,Speak,ConvertInitialCapitalCharacter and Clear text tools such as to convert case, remove accents,
line breaks, extra space, also regular expressions tools for extracting elements from text such as IPs and e-mail addresses.
And this is actually only a subset of what we have..</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Why is it different?</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Fast, secure and easy. This is a summary of what TextUtils.com is. All we design is intended to be fast, really fast. 
Other than that, all our utilities are client-side, meaning your data will not go through our servers to be processed.
Your data is secure. Finally, TextUtils.com is also quite easy. Everything can be found on the page very quickly,
 in just a few clicks..</strong>
      </div>
    </div>
  </div>
</div>
    </div>
    {/* <div className="container">
    <button type="button" onClick={handleMode}  className="btn btn-info my-3">{btn}</button>
    </div> */}
    </>
  )
  }