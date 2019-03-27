import React from 'react'

function About() {
  return (
    // <div className='center-align col s12 m6 l6'>
    //   <h4>Frequently Asked Questions</h4>
    //   <div className='row'>
    //     <div className="col s12 m6 l6">
    //     <h4>What is Moodmancer?</h4>
    //       <p>
    //         Moodmancer is a full-featured mood and habit tracker web application
    //         that uses supervised machine learning in brain.js to identify the
    //         habits and outside factors that affect users' moods. The philosophical
    //         purpose of the app is to help users recognize that although there are
    //         some things that we cannot control, by giving ourselves agency and
    //         ownership over what we can control, we have the power to impact our
    //         overall perceptions of our daily lives.
    //       </p>
    //     </div>

    //     <div className='col s6'>
    //       <h4>How do I use Moodmancer?</h4>
    //       <p>
    //         Sign up or log in to start tracking your habits and moods in
    //         Moodmancer. Check in twice per day: once in the morning to plan and
    //         set your expectations for the upcoming day, and again in the evening
    //         to report back on how your day actually went and see how our
    //         predictions measured up. You can also visit the history page to view
    //         your logged days over time and possibly see patterns emerge from your
    //         moods and behaviours. Happy moodmancing!
    //       </p>
    //     </div>

    //   <div className='row'>
    //     <div className="col s12 m6 l6">
    //     <h4>How dare you?</h4>
    //       <p>
    //         Our intention is not to oversimplify human emotion. We aim to take a
    //         few main influencing factors and evaluate how they can affect your
    //         mood. We wanted to develop a tool that is a useful starting point
    //         for examining your own emotions and behavior rather than a hard and
    //         fast solution to all of your problems.
    //       </p>
    //     </div>

    //     <div className='col s6'>
    //     <h4>How do the predictions work?</h4>
    //       <p>
    //         Your responses from the morning form are given as input to a
    //         supervised neural network (NN) that was trained on real data from
    //         real humans. The NN uses its 'knowledge' of habit/mood relationships
    //         to make a guess about how your moods might look based on your plans
    //         for the day.
    //       </p>
    //     </div>
    //   </div>

    //   <div className='row'>
    //     <div className='col s6'>
    //     <h4>What are you doing with all my data?</h4>
    //       <p>
    //         Your data goes safely into our database where it is translated into
    //         a format that is readable by our machine learning algorithm. From
    //         there, the data trains the algorithm to be better at working with
    //         your personal tendencies.
    //       </p>
    //     </div>

    //     <div className='col s6'>
    //     <h4>The Technical Stuff</h4>
    //       <p>
    //         We created the app with a React-Redux frontend with styling through
    //         Material UI and data visualization through Victory Charts. For the
    //         backend, we built a PostgreSQL database connected with Sequelize to
    //         RESTful Express routing. We used brain.js to create and train a neural
    //         network that takes a user's plans for the day as input and outputs a
    //         prediction of how much pleasantness, energy, and tension the planned
    //         day might involve. Users can check back in at the end of the day and
    //         see how their expected day compares to their actual day, and they can
    //         look back on their history to see how their habits and moods have
    //         changed over time.
    //       </p>
    //     </div>

    //     <div className='center-align'>
    //       <h4>Who made Moodmancer?</h4>
    //       <p className="text-paragraph">
    //         Moodmancer was made by four rad humans for a capstone project during
    //         the Grace Hopper Program at Fullstack Academy:{' '}
    //         <div>
    //           <a href="https://github.com/halimchu">Halim Chu</a>
    //         </div>
    //         <div>
    //           <a href="https://github.com/friggito">Ornella Friggit </a>
    //         </div>
    //         <div>
    //           <a href="https://github.com/milkwitch">Dani Jordan </a>
    //         </div>
    //         <div>
    //           <a href="https://github.com/rainyleaf">Torri Raines</a>
    //         </div>
    //       </p>
    //     </div>
    //   </div>

    //   </div>
    // </div>

    <div id="about-page" className="row">
      <h4>Frequently Asked Questions</h4>
      <div id="app-description" className="col s12 m6 l6">
        <h4>What is Moodmancer?</h4>
        <p className="text-paragraph">
          Moodmancer is a full-featured mood and habit tracker web application
          that uses supervised machine learning in brain.js to identify the
          habits and outside factors that affect users' moods. The philosophical
          purpose of the app is to help users recognize that although there are
          some things that we cannot control, by giving ourselves agency and
          ownership over what we can control, we have the power to impact our
          overall perceptions of our daily lives.
        </p>
        <h4>How do I use Moodmancer?</h4>
        <p className="text-paragraph">
          Sign up or log in to start tracking your habits and moods in
          Moodmancer. Check in twice per day: once in the morning to plan and
          set your expectations for the upcoming day, and again in the evening
          to report back on how your day actually went and see how our
          predictions measured up. You can also visit the history page to view
          your logged days over time and possibly see patterns emerge from your
          moods and behaviours. Happy moodmancing!
        </p>
        <h4>Who made Moodmancer?</h4>
        <p className="text-paragraph">
          Moodmancer was made by four rad humans for a capstone project during
          the Grace Hopper Program at Fullstack Academy:{' '}
          <a href="https://github.com/halimchu">Halim Chu, </a>
          <a href="https://github.com/friggito">Ornella Friggit, </a>
          <a href="https://github.com/milkwitch">Dani Jordan, </a> and{' '}
          <a href="https://github.com/rainyleaf">Torri Raines.</a>
        </p>
        <h4>The Technical Stuff</h4>
        <p className="text-paragraph">
          We created the app with a React-Redux frontend with styling through
          Material UI and data visualization through Victory Charts. For the
          backend, we built a PostgreSQL database connected with Sequelize to
          RESTful Express routing. We used brain.js to create and train a neural
          network that takes a user's plans for the day as input and outputs a
          prediction of how much pleasantness, energy, and tension the planned
          day might involve. Users can check back in at the end of the day and
          see how their expected day compares to their actual day, and they can
          look back on their history to see how their habits and moods have
          changed over time.
        </p>
      </div>
      <div id="faq" className="col s12 m6 l6">
        <div className="faq-questions">
          <h5 className="faq-question">How dare you?</h5>
          <p className="faq-answer">
            Our intention is not to oversimplify human emotion. We aim to take a
            few main influencing factors and evaluate how they can affect your
            mood. We wanted to develop a tool that is a useful starting point
            for examining your own emotions and behavior rather than a hard and
            fast solution to all of your problems.
          </p>
          <h5 className="faq-question">How do the predictions work?</h5>
          <p className="faq-answer">
            Your responses from the morning form are given as input to a
            supervised neural network (NN) that was trained on real data from
            real humans. The NN uses its 'knowledge' of habit/mood relationships
            to make a guess about how your moods might look based on your plans
            for the day.
          </p>
          <h5 className="faq-question">What are you doing with all my data?</h5>
          <p className="faq-answer">
            Your data goes safely into our database where it is translated into
            a format that is readable by our machine learning algorithm. From
            there, the data trains the algorithm to be better at working with
            your personal tendencies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
