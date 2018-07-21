// document.addEventListener('DOMContentLoaded', () => {

//     // Connect to websocket
//     var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

//     // When connected, configure buttons
//     socket.on('connect', () => {

//         // Each button should emit a "submit vote" event
//         document.querySelectorAll('button').forEach(button => {
//             button.onclick = () => {
//                 const selection = button.dataset.vote;
//                 socket.emit('submit vote', {'selection': selection});
//             };
//         });
//     });

//     // When a new vote is announced, increase the count
//     socket.on('vote totals', data => {
//         document.querySelector('#yes').innerHTML = data.yes;
//         document.querySelector('#no').innerHTML = data.no;
//         document.querySelector('#maybe').innerHTML = data.maybe;
//     });
// });


document.addEventListener('DOMContentLoaded', () => {

      // By default, submit button is disabled
      document.querySelector('#submit').disabled = true;

      // Enable button only if there is text in the input field
      document.querySelector('#message').onkeyup = () => {
          if (document.querySelector('#message').value.length > 0)
              document.querySelector('#submit').disabled = false;
          else
              document.querySelector('#submit').disabled = true;
      };

      document.querySelector('#submit_comment_form').onsubmit = () => {

          // Create new item for list
          const li = document.createElement('li');
          li.innerHTML = document.querySelector('#message').value;

          // Add new item to task list
          document.querySelector('#messages').append(li);

          // Clear input field and disable button again
          document.querySelector('#message').value = '';
          document.querySelector('#submit').disabled = true;

          // Stop form from submitting
          return false;
      };

      // By default, submit button is disabled
    //   document.querySelector('#create_channel_btn').disabled = true;

    //   // Enable button only if there is text in the input field
    //   document.querySelector('#create_channel_input').onkeyup = () => {
    //       if (document.querySelector('#create_channel_input').value.length > 0)
    //           document.querySelector('#create_channel_btn').disabled = false;
    //       else
    //           document.querySelector('#create_channel_btn').disabled = true;
    //   };


    //   document.querySelector('#create_channel').onsubmit = () => {

    //       // Create new channel in the left-nav
    //       const li = document.createElement('li');
    //       li.innerHTML = document.querySelector('#create_channel_input').value;

    //       // Add new channel in list of channels in the left-nav
    //       document.querySelector('#channels_list').append(li);

    //       // Clear input field and disable button again
    //       document.querySelector('#create_channel_input').value = '';
    //       document.querySelector('#create_channel_btn').disabled = true;

    //       // Stop form from submitting
    //       return false;
    //   }

  });



