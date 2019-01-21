package demo;
import java.io.IOException;   
import org.apache.pdfbox.pdmodel.PDDocument;  
  
public class A {

		  
		  
		    public static void main(String[] args)throws IOException {  
		        //Creating PDF document object   
		          PDDocument doc = new PDDocument();      
		      
		    //Saving the document  
		    doc.save("/eclipse-workspace/blank.pdf");  
		          
		          System.out.println("PDF created");    
		      
		    //Closing the document    
		    doc.close();  
		    }  
		 
	}

}
