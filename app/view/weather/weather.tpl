<html>
  <head>
    <title> {{ title }}</title>
    <link  rel="stylesheet"  type="text/css" href="/public/weather.css"  />
  </head>
  <body>
    <ul class="news-view view">
     {{ title }}
     {{ helper.relativeTime(1597907257)  }}
      {% for item in newsList.data %}
        <div>
            <span>
               {{ item.day }}
            </span>---
             <span>
               {{ item.wea }}
            </span>
        </div>
      {% endfor %}
    </ul>
 
  </body>
</html>