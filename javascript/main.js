      //TABLETOP
      //window.onload = function() { init() };

      var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1DwKBo7aE5c0tZzebF-ahLei3CV_RuD_sa6SXLUqqdEs/pubhtml';


      function init() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         simpleSheet: true
                       } )
      }


      function showInfo(data, tabletop) {

        var container = document.querySelector(".container");
        container.innerHTML = "";

        var one = data.map(function(data){
      
          var obj = {};
          obj = [data.Year,
          Number(data.ACH),
          Number(data.BusinessLoan),
          Number(data.Check),
          Number(data.ConsumerLoan),
          Number(data.CreditDebitCard),
          Number(data.Wire)
          ];
          return obj;
        })

        var two = data.map(function(data){
      
          var obj = {};
          obj = [data.Year,
 //         Number(data.AvoidingBSARequirement),
 //         Number(data.AvoidingCTRRequirement),
          Number(data.ChangesName),
          Number(data.ExchangesBills),
          Number(data.LittleConcernForPenalites),
          Number(data.SharedIdentities),
          Number(data.QuestionableDocumentation),
          Number(data.AvoidingDocumentationRequest),
          Number(data.MultipleIdentities),
          Number(data.CounterfeitInstrument)
          ];
          return obj;
        })

        var three = data.map(function(data){
      
          var obj = {};
          obj = [data.Year,
          Number(data.AccountTakeover),
          Number(data.BriberyorGratuity),
          Number(data.ElderFinancialExploitation),
          Number(data.EmbezzlementOrTheft),
          Number(data.Forgeries),
          Number(data.IdentityTheft),
          Number(data.PyramidScheme),
          Number(data.TradeBasedMoneyLaundering),
          Number(data.PublicPrivateCorruption)
          ];
          return obj;
        })

        drawChart(one,two,three);

      }


      //GOOGLE CHARTS 
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {
        'packages':['corechart'],
      });

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(init);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart(dataStuff1,dataStuff2,dataStuff3) {

        // Create the data table.
        var data1 = new google.visualization.DataTable();
        data1.addColumn('string', 'Year');
        data1.addColumn('number', 'ACH');
        data1.addColumn('number', 'BusinessLoan');
        data1.addColumn('number', 'Check');
        data1.addColumn('number', 'ConsumerLoan');
        data1.addColumn('number', 'CreditDebitCard');
        data1.addColumn('number', 'Wire');
        data1.addRows(dataStuff1);

        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Year');
  //      data2.addColumn('number', 'AvoidingBSARequirement');
  //      data2.addColumn('number', 'AvoidingCTRRequirement');
        data2.addColumn('number', 'ChangesName');
        data2.addColumn('number', 'ExchangesBills');
        data2.addColumn('number', 'LittleConcernForPenalites');
        data2.addColumn('number', 'SharedIdentities');
        data2.addColumn('number', 'QuestionableDocumentation');
        data2.addColumn('number', 'AvoidingDocumentationRequest');
        data2.addColumn('number', 'MultipleIdentities');
        data2.addColumn('number', 'CounterfeitInstrument');
        data2.addRows(dataStuff2);

        var data3 = new google.visualization.DataTable();
        data3.addColumn('string', 'Year');
        data3.addColumn('number', 'AccountTakeover');
        data3.addColumn('number', 'BriberyorGratuity');
        data3.addColumn('number', 'ElderFinancialExploitation');
        data3.addColumn('number', 'EmbezzlementOrTheft');
        data3.addColumn('number', 'Forgeries');
        data3.addColumn('number', 'IdentityTheft');
        data3.addColumn('number', 'PyramidScheme');
        data3.addColumn('number', 'TradeBasedMoneyLaundering');
        data3.addColumn('number', 'PublicPrivateCorruption');
        data3.addRows(dataStuff3);

        // Set chart options
        var options1 = {'title':'MSB filings by product type',
                       'width':1500,
                       'height':800,
                       legend: { position: 'bottom' }
                       };
 
         var options2 = {'title':'MSB filings by suspicious activity type',
                       'width':1500,
                       'height':800,
                       legend: { position: 'bottom' }
                       };                    

         var options3 = {'title':'MSB filings by suspected crime',
                       'width':1500,
                       'height':800,
                       legend: { position: 'bottom' }
                       };  

        // Instantiate and draw our charts, passing in some options.
        var chart1 = new google.visualization.LineChart(document.getElementById('chart1_div'));
        chart1.draw(data1, options1);

        var chart2 = new google.visualization.LineChart(document.getElementById('chart2_div'));
        chart2.draw(data2, options2);

        var chart3 = new google.visualization.LineChart(document.getElementById('chart3_div'));
        chart3.draw(data3, options3);

      }