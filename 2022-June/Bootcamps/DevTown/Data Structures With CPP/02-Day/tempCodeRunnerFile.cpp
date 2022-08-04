// 1.   Fixed Size Array
    // int arr[100] = 100
    // int arr[] = {5,10,15,20,25,30};

// 2.   Dynamic Size Array
    // Vectors over fixed size array
    //


#include<iostream>
using namespace std;

int search(int arr[],int n , int x){
    for(int i=0; i<n; i++){
            if(arr[i]==x){
            // return index
            return i;
            }
        }
    return -1;
}

int main(){
    cout << "Fixed Size Array" <<"\n";
    int arr[] = {5,10,20,3,7};
    // search for 20
    int x = 20;
    cout << search(arr,15,x);
    return 0;
}
