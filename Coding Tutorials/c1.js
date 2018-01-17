//To print all the inetgers between 1 to 1000 which do not contain 7

var i, flag;
for(i=0; i<1000; i++)
{
	var b = i;
	var temp;
	while(b>0)
	{
		temp=b%10;
		if(temp==7){flag=1;}
		b=parseInt(b/10);
	}
	if(flag==1){
		flag=0;
		continue;
	}
	document.write(i+" ");
}



// var a=245, b;
// while(a>0){
// b=a%10;
// document.write(b+" ");
// a=parseInt(a/10);
// // document.write(a);
// }