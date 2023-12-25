namespace sera_app.Config
{
    public class GlobalException
    {
        public bool status { get; set; }
        public string? message { get; set; }
        public int statusCode { get; set; }

        public string? endpoint { get; set; }
    }
}
