
namespace radiobuttton
{
	using System;
	using System.Web;
	using System.Web.UI;

	public partial class Default : System.Web.UI.Page
	{
		
		public void button1Clicked (object sender, EventArgs args)
		{
			l1.Text = r1.SelectedItem.ToString();
		}
		public void button2Clicked (object sender, EventArgs args)
		{
			l1.Text = d1.SelectedValue;
		}
	
	}





}

