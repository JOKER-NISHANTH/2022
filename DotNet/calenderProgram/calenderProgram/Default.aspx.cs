
namespace calenderProgram
{
	using System;
	using System.Web;
	using System.Web.UI;

	public partial class Default : System.Web.UI.Page
	{

		public void clicked(object sender , EventArgs args){

			today.Text = c1.TodaysDate.ToShortDateString();
			dob.Text = c1.SelectedDate.ToShortDateString();
			showDate.Text = "You Selected: "+c1.SelectedDate.ToString("D");
			d.Text = c1.SelectedDate.ToString("dd/MM/yyyy");
		}

	}
}

