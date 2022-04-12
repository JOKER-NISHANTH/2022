<%@ Page Language="C#" Inherits="calenderProgram.test" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>test</title>
</head>
<body>
	<form id="form1" runat="server">
	</form>
</body>
</html>


<!--
<form id="form1" runat="server">
<div> <h3> Your Birthday : </h3>
<asp:Calendar ID="c1" runat="server” SelectionMode="DayWeekMonth"
OnSelectionChanged ="c1s" />
</div>
<p>Today date is: <asp:Label ID="today" runat="server" /></p>
<p>Your Birthday is: <asp:Label ID="dob" runat="server" /></p>
<p><asp:Label ID="showDate" runat="server" /></p>
<p> Date Month Year Format : <asp:Label ID="date" runat="server" /></p>
</form>
protected void c1s (object sender, EventArgs e) {
}
today.Text = c1.TodaysDate.ToShortDateString();
dob.Text = c1.SelectedDate.ToShortDateString();
showDate.Text = "You Selected: "+c1.SelectedDate.ToString("D");
date.Text = c1.SelectedDate.ToString("dd/MM/yyyy");Thank you!
-->