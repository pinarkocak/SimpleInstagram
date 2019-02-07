# SimpleInstagram

Öncelikli olarak react native projesi oluşturduk, bunun için cmd'ye

      react-native init project_name
komutunu yazdık.

React Native projesini çalıştırmak için:

      react-native start  
      react-native run-android
komutları kullanılır.

Aşağıda uygulamanın giriş sayfası ve kayıt sayfalarının ekran görüntüleri bulunmaktadır.

<img src="images/LoginPage.png" width="200" height="350">  <img src="images/RegisterPage.png" width="200" height="350"> <img src="images/ForgotPassword.png" width="200" height="350"> 

Mobil uygulamalar çok nadiren tek sayfadan oluşun uygulamalardır, single screen mantığından çok multiple screens daha çok kullanılır. Ve bu sayfalar kendi arasında geçişleri sağlamak için componentler kullanılır. React-Native de farklı navigation componentleri vardır. Biz burada Router yapısını tercih ettik. Bu yapının kullanılabilmesi için;

      npm install react-native-router-flux --save 
komutunu çalıştırdık ve projeye import ettik.

Sayfalar arasında navigate gerçekleştiriken Router’da Actions’lardan yararlanılır. Ne zaman sayfa değiştirmek istesek her sayfa için Scene kullanarak tanımladığımız key’ler ile Actions çağırırız. Bu key ile diğer .js dosyalarında o sayfalara erişilebilecek. Böylece geçiş işlemi gerçekleşir. 

Uygulamada veritabanı olarak Firebase'den yararlandık. Firebase'i uygulamada kullanabilmek için: 

      npm install firebase --save
Firebase'in sunmuş olduğu signInWithEmailAndPassword(), sendPasswodResetEmail() ve createUserWithAndPassword() hazır fonksiyonlarından yararlanıldı.

Galeriden fotoğraf seçimi ve fotoğrafın yeniden boyutlandırılması işlemleri için:

      npm install react-native-image-crop-picker --save
      react-native link react-native-image-crop-picker
      npm install react-native-fetch-blob --save
      react-native link react-native-fetch-blob
komutlarından yararlanılır.

Aşağıda işlemlerin ekran görüntüleri yer almaktadır:

<img src="images/ChoosingImage.png" width="200" height="350">  <img src="images/EditPage.png" width="200" height="350"> <img src="images/UploadImage.png" width="200" height="350"> 

Uygulamada emülatörden kameraya erişmek için:
  
      npm install react-native-camera --save
      react-native link react-native-camera
      
Kameranın kullanılabilmesi için bu kısımda projenin AndroidManifest.xml kısmına uses-permission'lar eklenmesi gerekmektedir.

      <uses-permission android:name="android.permission.INTERNET" />
      <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
      <uses-permission android:name="android.permission.RECORD_AUDIO" />
      <uses-permission android:name="android.permission.RECORD_VIDEO" />
      <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
      <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
      <uses-feature android:name="android.hardware.camera" />
      <uses-feature android:name="android.hardware.camera.autofocus" />
      
      
