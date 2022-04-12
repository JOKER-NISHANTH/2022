
namespace session
{
	using System;
	using System.Web;
	using System.Web.UI;

	public partial class Default : System.Web.UI.Page
	{
		
		public void b1c (object sender, EventArgs args)
		{
			Session ["a"] = t1.Text;
			Session ["b"] = t2.Text;
		}

		public void b2c (object sender, EventArgs args)
		{
			Response.Redirect ("second.aspx");
		}

		public void b3c (object sender, EventArgs args)
		{
			Response.Redirect ("third.aspx");
		}

	}
}

