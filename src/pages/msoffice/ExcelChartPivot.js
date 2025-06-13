import React from 'react';

const ExcelChartPivot = () => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        lineHeight: 1.7,
        color: '#333',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '26px',
          marginBottom: '25px',
          color: '#0d47a1',
          borderBottom: '2px solid #eee',
          paddingBottom: '10px',
        }}
      >
        Excel Charts & Pivot Tables
      </h2>

      {/* Charts Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Excel Charts</h3>
      <p>
        <strong>Definition:</strong> A chart in Excel is a <b>visual representation of data</b> that helps users quickly
        identify patterns, trends, and comparisons.
      </p>
      <p>
        <strong>Purpose:</strong> Makes it easier to understand large sets of numerical data visually.
      </p>

      <h4 style={{ marginTop: '20px', color: '#2e7d32' }}>Common Types of Charts:</h4>
      <ul>
        <li><b>Column Chart:</b> Shows data changes over time or comparisons among items.</li>
        <li><b>Line Chart:</b> Displays trends over time with continuous data points.</li>
        <li><b>Pie Chart:</b> Shows proportions of a whole in circular slices.</li>
        <li><b>Bar Chart:</b> Horizontal version of the column chart.</li>
        <li><b>Area Chart:</b> Similar to a line chart, but filled below lines.</li>
        <li><b>XY (Scatter) Chart:</b> Shows relationship between two numerical variables.</li>
        <li><b>Radar Chart:</b> Compares multiple variables in a circular format.</li>
        <li><b>Bubble Chart:</b> Scatter chart with bubble sizes to show third variable.</li>
        <li><b>Combo Chart:</b> Combines two types of charts like column + line.</li>
        <li><b>Donut Chart:</b> Like a pie chart but with a blank center.</li>
      </ul>

      {/* Pivot Table Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>Pivot Tables</h3>
      <p>
        <strong>Definition:</strong> A Pivot Table is a powerful Excel tool to <b>summarize, analyze, explore, and
        present</b> large amounts of data in an interactive way.
      </p>

      <h4 style={{ marginTop: '20px', color: '#2e7d32' }}>Uses of Pivot Tables:</h4>
      <ul>
        <li>Summarize and group large datasets</li>
        <li>Answer data-related questions (like totals, averages, counts)</li>
        <li>Generate quick reports or dashboards</li>
        <li>Extract important trends and insights</li>
        <li>Display data interactively (with filtering and sorting)</li>
      </ul>

      <h4 style={{ marginTop: '20px', color: '#2e7d32' }}>Key Features:</h4>
      <ul>
        <li>Drag and drop fields to Rows, Columns, Values, Filters</li>
        <li>Quickly switch perspectives by “pivoting” the data</li>
        <li>Can connect to external data sources like OLAP servers</li>
        <li>Paired with Pivot Charts for visual insights</li>
      </ul>

      <h4 style={{ marginTop: '20px', color: '#2e7d32' }}>Example Use Cases:</h4>
      <ul>
        <li>Track sales by region, product, and month</li>
        <li>Analyze attendance or performance data</li>
        <li>Create monthly reports from daily logs</li>
      </ul>
    </div>
  );
};

export default ExcelChartPivot;
