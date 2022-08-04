#include<iostream>
using namespace std;

int delEle(int arr[],int n,int x){
    // cout << "Element for delete " <<  x <<endl;
    // cout << "Number of element in array " <<  n <<endl;
    int i = 0;
    for( i = 0 ; i < n ; i++){
        // cout << arr[i]<< " ";
        if(arr[i] == x){
            break;
        }
    }
    // cout << endl;
    // cout <<" I Value : " <<i <<endl;
    // cout <<" N Value : " <<n <<endl;
    if(i == n){
        return n;
    }
// cout << endl;
    for(int j = i;j <= n-1 ; j++){
        // cout << arr[j] <<endl;
        arr[j] = arr[j+1];
        // cout << arr[j+1] <<endl;
    }
    return n - 1;
}

int main(){
    int arr[]  = {5,10,20,3,7};
    int x  = 10;
    int n  = 5;

    cout <<"Before Deletion" <<endl;
    for(int i = 0 ; i < n ; i++) {
        cout<< arr[i]<< " ";
    }
    cout << endl;
    n = delEle(arr,n,x);

       cout <<"After Deletion" <<endl;
    for(int i = 0 ; i < n ; i++) {
        cout<< arr[i]<< " ";
    }
    cout << endl;
    return 0;
}