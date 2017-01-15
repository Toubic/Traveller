<h1><a href="/" >Back to the homepage</a> Fourth query: </h1>
<br>
<h2>Which people have been to all continents?</h2>
{{#each query}}
    <h2>{{this.[creator]}} {{this.[visited_all_continents]}}</h2>
{{/each}}
