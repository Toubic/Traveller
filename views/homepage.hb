<h1>Traveller</h1>
<form action="" method="post">
        <div>
            <h2>Traveller nickname:</h2>
            <input type="text" name="creator" required>
            <h2>Visited continent:</h2>
            {{> selectContinent }}
            <h2>Visited country:</h2>
            {{> selectCountry }}
            <h2>Visited city (Optional):</h2>
            <input type="text" name="city">
            <h2>Year for visit:</h2>
            {{> selectYear }}
            <br>
            <input type="submit" value="Add">
        </div>
        <ul id="queries">
            <li><a href="/firstquery" >First query</a></li>
            <li><a href="/secondquery" >Second query</a></li>
            <li><a href="/thirdquery" >Third query</a></li>
            <li><a href="/fourthquery" >Fourth query</a></li>

            <h2>Fifth query:</h2>

            <ul>
                <li><a href="/continents" >Show all visited continents</a></li>
                <li><a href="/countries" >Show all visited countries</a></li>
                <li><a href="/cities" >Show all visited cities</a></li>
            </ul>
        </ul>
</form>