

function populateCards(array){
    array.forEach(element => {
        var title = array[0];
        var description = array[1];
        var from = array[2];
        var to = array[3];

        var html ="";

        html += "<div class='card'>";
        html += "<div class='card-body'>";
        html += "<h4 class='card-title' id='cardTitle'>"+ title + "</h4>";
        html += "<h4 class='card-fromDestination' id='cardFromDestination'>" + from + "</h4>"; 
        html += "<h4 class='card-toDestination' id='cardtoDestination'>" + to + "</h4>";
        html += "<p class='card-text' id='cardDescription'>" + description + "</p>";
        html += "</div>";
        html += "</div>";

        return html;
    });
};

<% posts.forEach(function(post){ %>
    <li>
        <%= post.title %>
    </li>
<%     }) %>

/*<div class="card">
  <div class="card-body">
    <h4 class="card-title" id="cardTitle">Svendborg-SDU</h4>
    <h4 class="" id=""></h4>
    <p class="card-text" id="cardDescription">Hello muthafuckas, come drive with me, 100% safe</p>
  </div>
</div>*/