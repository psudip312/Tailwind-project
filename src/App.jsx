import "./App.css";
import logo from "../img/logo.svg"
function App() {
      // suru ma hidden huncha ra jada md or medium or more then medium ma hit garyo vane 
        // hidden hata
        // flex col reverse ke chai pachadi ko container lai reverse gardincha
//
// line 18 and 19 
   // // on medium screen and up the items should be shown else hiddenor simply bujcda hidden huncah suru ma ani
    // medium breakpoint aayese show garcha space x is x direction ma 6 le difference 

    // line 29 rounded vaneko boarder radius deko

  return (
    <>
      <h1>hello</h1>
      <h1 className="text-6xl">fjdfjdf</h1>
      <nav class="relative container mx-auto p-6 ">
        <div class="flex items-center justify-between">
          
        <div class="pt-2">
          <img src={logo}/>
        </div>
   
        <div class="hidden md:flex space-x-6">
          <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#" class="hover:text-darkGrayishBlue">Products</a>
          <a href="#" class="hover:text-darkGrayishBlue">About</a>
          <a href="#" class="hover:text-darkGrayishBlue">Carrers</a>
          <a href="#" class="hover:text-darkGrayishBlue">Community</a> 
        </div>
        <a href="#" class="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full">Get Starrt</a>
        </div>
      </nav>
    <section id="hero"> 
      <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
      >
        <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1
            class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
          >
            Bring everyone together to build better Ishor
          </h1>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div class="flex justify-center md:justify-start">
            <a
              href="#"
              class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >Get Started</a
            >
          </div>
        </div>
      
        <div class="md:w-1/2">
          <img src="img/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>
    <section id="features">
 
    <div
      class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
    >
     
      <div class="flex flex-col space-y-12 md:w-1/2">
        <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
          What's different about Manage?
        </h2>
        <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

     
      <div class="flex flex-col space-y-8 md:w-1/2">
    
        <div
          class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
        >
       
          <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div
                class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
              >
                01
              </div>
              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>

          <div>
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Track company-wide progress
            </h3>
            <p class="text-darkGrayishBlue">
              See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture
              again.
            </p>
          </div>
        </div>

     
        <div
          class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
        >
        
          <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div
                class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
              >
                02
              </div>
              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Advanced built-in reports
              </h3>
            </div>
          </div>

          <div>
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Advanced built-in reports
            </h3>
            <p class="text-darkGrayishBlue">
              Set internal delivery estimates and track progress toward
              company goals. Our customisable dashboard helps you build out
              the reports you need to keep key stakeholders informed.
            </p>
          </div>
        </div>

       
        <div
          class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
        >
       
          <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div
                class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
              >
                03
              </div>
              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Everything you need in one place
              </h3>
            </div>
          </div>

          <div>
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Everything you need in one place
            </h3>
            <p class="text-darkGrayishBlue">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex flex-col md:flex-row">
  <div class="bg-blue-200 md:bg-red-200 md:w-1/2 flex items-center justify-center p-4">
    <div class="text-center">
      <h1 class="text-black font-bold text-2xl md:text-3xl">What's different about Manage?</h1>
      <p class="text-gray-800 mt-4">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams...</p>
    </div>
  </div>
  <div class="bg-green-200 md:bg-yellow-200 md:w-1/2 p-4">
    <div>
      <h2 class="text-black font-bold text-2xl md:text-3xl">Track company-wide progress</h2>
      <p class="text-gray-800 mt-4">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.</p>
      <h2 class="text-black font-bold text-2xl md:text-3xl mt-4">Advanced built-in reports</h2>
      <p class="text-gray-800 mt-4">Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
      <h2 class="text-black font-bold text-2xl md:text-3xl mt-4">Everything you need in one place</h2>
      <p class="text-gray-800 mt-4">Stop jumping from one service to another to communicate, store files, track tasks, and share documents. Manage offers an all-in-one team productivity solution.</p>
    </div>
  </div>
</div>
<section id="testimonials">
      <!-- Container to heading and testm blocks -->
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        <!-- Heading -->
        <h2 class="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <!-- Testimonials Container -->
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
          <!-- Testimonial 1 -->
          <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src="img/avatar-anisha.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-ali.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-richard.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        <!-- Button -->
        <div class="my-16">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a
          >
        </div>
      </div>
    </secti



    </>
  );
}

export default App;
