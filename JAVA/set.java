import java.util.*;
public class set
{
   public static void main(String[] args) 
   {
    Scanner sc=new Scanner (System.in);
    System.out.println("Enter array size");
    int n=sc.nextInt();
    int[] arr = new int[n];
    System.out.println("Enter Something");
    for(int i=0; i<n; i++)  
    {
        arr[i]=sc.nextInt();  
    }  
    System.out.println("The subarrays are-");
    printSubArrays(arr, 0, 0);
    sc.close();
   }
   static void printSubArrays(int[] arr, int head, int tail) 
   {
      if (tail == arr.length)
         return;
      else if (head > tail)
         printSubArrays(arr, 0, tail + 1);
      else 
      {
         for (int i = head; i < tail; i++)
            System.out.print(arr[i] + " ");
         System.out.println(arr[tail]);
         printSubArrays(arr, head + 1, tail);
      }
      return;
   }
}