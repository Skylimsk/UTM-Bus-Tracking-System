<!DOCTYPE html>
<html>

<head>
  <title>Route</title>
  <link rel="stylesheet" type="text/css" href="Route.css">
</head>

<body>
  <div class="menu-bar">
    <div class="logo"><img src="images/UTM-LOGO-FULL.png" alt="UTM Logo" width="180px"></div>
    <ul class="menu-links">
      <li><a href="mainPage.php">Home</a></li>
      <li><a href="Route.php">Route</a></li>
      <li><a href="live_tracking.html">Live Tracking</a></li>
    </ul>
    <div class="logout">
      <a href="logout.php">Logout</a>
    </div>
  </div>
  <div class="photo-container">
    <div class="photo">
      <img src="images/UTMimage13.jpg" alt="utmbus">
      <div class="photo-text">UTM Fleet - Bus Info</div>
    </div>
  </div>
  <br>
  <div class="bus-selector">
    <div class="tabs">
      <div class="tab active" onclick="toggleTab('UTM Bus')" data-tab="UTM Bus">UTM Bus</div>
      <div class="tab" onclick="toggleTab('P211')" data-tab="P211">P211</div>
    </div>
    <div class="tab-content active" data-tab="UTM Bus">
      <p style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px;">Bus Routes</p>
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Departure</th>
            <th>Arrival</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="route"><a href="Route Map/Bus A/A_map.html">A1/A2</a></td>
            <td>KP</td>
            <td>KP</td>
          </tr>
          <tr>
            <td class="route"><a href="Route Map/Bus B/B_map.html">B1/B2/B3</a></td>
            <td>KP, K9/K10</td>
            <td>Cluster (T02-T08)</td>
          </tr>
          <tr>
            <td class="route"><a href="Route Map/Bus C/C_map.html">C1/C2/C3</a></td>
            <td>K9/K10</td>
            <td>K9/K10</td>
          </tr>
          <tr>
            <td class="route"><a href="Route Map/Bus D/D_map.html">D1/D2</a></td>
            <td>KDOJ</td>
            <td>Lingkaran Ilmu</td>
          </tr>
          <tr>
            <td class="route"><a href="Route Map/Bus E/E_map.html">E1/E2</a></td>
            <td>KDOJ/KLG/KDSE</td>
            <td>Cluster (T02-T08)</td>
          </tr>
          <tr>
            <td class="route"><a href="Route Map/Bus F/F_map.html">F1/F2/F3</a></td>
            <td>KTR</td>
            <td>Centre Point</td>
          </tr>
          <tr>
            <td class="route"><a href="Route Map/Bus G/G_map.html">G1/G2/G3</a></td>
            <td>KTR/KTHO/KTDI</td>
            <td>Centre Point</td>
          </tr>
          <tr>
            <td class="route"><a href="Route Map/Bus H/H_map.html">H</a></td>
            <td>Centre Point</td>
            <td>V01 (Taman Universiti)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tab-content" data-tab="P211">
      <p style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px;">Bus Routes</p>
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Departure</th>
            <th>Arrival</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="route"><a href="Route Map/P211/P211_map.html">P211</a></td>
            <td>Terminal Taman Universiti</td>
            <td>Larkin Sentral</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <script>
    function toggleTab(tabText) {
      // Get all tab content elements
      var tabContents = document.querySelectorAll('.tab-content');

      // Remove the 'active' class from all tab content elements
      tabContents.forEach(function(tabContent) {
        tabContent.classList.remove('active');
      });

      // Add the 'active' class to the selected tab content
      var selectedTabContent = document.querySelector('.tab-content[data-tab="' + tabText + '"]');
      selectedTabContent.classList.add('active');

      // Get all tab elements
      var tabs = document.querySelectorAll('.tab');

      // Remove the 'active' class from all tabs
      tabs.forEach(function(tab) {
        tab.classList.remove('active');
      });

      // Add the 'active' class to the selected tab
      var selectedTab = document.querySelector('.tab[data-tab="' + tabText + '"]');
      selectedTab.classList.add('active');
    }
  </script>
</body>

</html>