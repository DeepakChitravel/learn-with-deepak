import React from 'react';

const DateOfBirth = () => {
  const birthDate = new Date(1995, 4, 15); // May 15, 1995
  const compareDate = new Date(); // today

  const getYears = (start, end) => {
    let years = end.getFullYear() - start.getFullYear();
    if (
      end.getMonth() < start.getMonth() ||
      (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())
    ) {
      years--;
    }
    return years;
  };

  const getMonths = (start, end) => {
    let months = end.getMonth() - start.getMonth();
    if (end.getDate() < start.getDate()) {
      months--;
    }
    if (months < 0) months += 12;
    return months;
  };

  const getDays = (start, end) => {
    let days = end.getDate() - start.getDate();
    if (days < 0) {
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }
    return days;
  };

  const years = getYears(birthDate, compareDate);
  const months = getMonths(birthDate, compareDate);
  const days = getDays(birthDate, compareDate);

  // Styles
  const containerStyle = {
    maxWidth: '720px',
    margin: '50px auto',
    padding: '40px 35px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#ffffff',
    borderRadius: '14px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
    color: '#222',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    fontWeight: '700',
    fontSize: '28px',
    marginBottom: '30px',
    letterSpacing: '1.1px',
  };

  const sectionTitleStyle = {
    color: '#34495e',
    fontWeight: '600',
    fontSize: '20px',
    marginTop: '28px',
    marginBottom: '10px',
    borderBottom: '2px solid #2980b9',
    paddingBottom: '6px',
  };

  const formulaBoxStyle = {
    backgroundColor: '#f5f8fa',
    borderLeft: '5px solid #2980b9',
    padding: '12px 16px',
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: '15px',
    color: '#34495e',
    marginTop: '8px',
    borderRadius: '4px',
    userSelect: 'text',
  };

  const outputTextStyle = {
    fontSize: '18px',
    color: '#27ae60',
    fontWeight: '600',
    marginTop: '6px',
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Birthdate Calculation</h2>

      <p>
        <span style={labelStyle}>Birth Date:</span> {birthDate.toDateString()}
      </p>
      <p>
        <span style={labelStyle}>Comparison Date:</span> {compareDate.toDateString()}
      </p>

      <section>
        <h3 style={sectionTitleStyle}>1. Years Only</h3>
        <div style={formulaBoxStyle}>=DATEDIF(A2, B2, "Y")</div>
        <p style={outputTextStyle}>{years} Years</p>
      </section>

      <section>
        <h3 style={sectionTitleStyle}>2. Months Only (after years)</h3>
        <div style={formulaBoxStyle}>=DATEDIF(A2, B2, "YM")</div>
        <p style={outputTextStyle}>{months} Months</p>
      </section>

      <section>
        <h3 style={sectionTitleStyle}>3. Days Only (after years and months)</h3>
        <div style={formulaBoxStyle}>=DATEDIF(A2, B2, "MD")</div>
        <p style={outputTextStyle}>{days} Days</p>
      </section>

      <section>
        <h3 style={sectionTitleStyle}>4. Full Age (Years, Months, Days)</h3>
        <div style={formulaBoxStyle}>
          =DATEDIF(A2, B2, "Y") & " Years, " & DATEDIF(A2, B2, "YM") & " Months, " & DATEDIF(A2, B2, "MD") & " Days"
        </div>
        <p style={outputTextStyle}>
          {years} Years, {months} Months, {days} Days
        </p>
      </section>
    </div>
  );
};

export default DateOfBirth;
