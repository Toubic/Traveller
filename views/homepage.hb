<h1>Traveller</h1>
<br>
<br>
<br>
<form action="" method="post">
        <br>
        <div>
        <h2>Traveller nickname:</h2>
        <input type="text" name="creator" required>
        <br>
        <h2>Visited continent:</h2>
        {{> selectContinent }}
        <br>
        <h2>Visited country:</h2>
        {{> selectCountry }}
        <br>
        <h2>Visited city (Optional):</h2>
        <input type="text" name="city">
        <br>
        <h2>Year for visit:</h2>
        {{> selectYear }}
        <br>
        <br>
        <br>
        <input type="submit" value="Add">
        </div>
        <br>
        <br>
        <ul id="queries">
            <li><a href="/firstquery" >First query</a></li>
            <li><a href="/secondquery" >Second query</a></li>
            <li><a href="/thirdquery" >Third query</a></li>
            <li><a href="/fourthquery" >Fourth query</a></li>
            <br>
            <br>
            <h2>Fifth query:</h2>
            <br>
            <ul>
                <li><a href="/continents" >Show all visited continents</a></li>
                <li><a href="/countries" >Show all visited countries</a></li>
                <li><a href="/cities" >Show all visited cities</a></li>
            </ul>
        </ul>
        <br>
</form>