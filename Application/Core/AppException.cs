using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Core
{
    public class AppException : System.Exception
    {
        public AppException(int statusCode, string message, string details = null, object responseMessage = null)
        {
            StatusCode = statusCode;
            Message = message;
            Details = details;
            ResponseMessage = responseMessage;
        }

        public AppException(int statusCode, string message, string details = null)
        {
            StatusCode = statusCode;
            Message = message;
            Details = details;
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }   
        public string Details { get; set; }
        public object ResponseMessage { get; set; } 
    }
}