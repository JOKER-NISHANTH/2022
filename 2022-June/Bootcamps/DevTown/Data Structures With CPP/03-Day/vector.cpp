
#include<iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> arr {5,10,20};
    cout << "Before insertion"<<endl;
    for (int i = 0 ; i < arr.size() ; i++){
        cout << arr[i]<< " ";
    }
    cout<<endl;
    // in vector using pointers
    auto it = arr.begin() + 1;
    auto iter = arr.insert(it,6);
    cout << "After insertion"<<endl;
    for (int i = 0 ; i < arr.size() ; i++){
        cout << arr[i]<< " ";
    }
    cout<<endl;
    return 0;
}