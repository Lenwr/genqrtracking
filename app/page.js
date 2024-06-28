import styles from "./page.module.css";
import {supabase} from "@/app/lib/supabase";

export default function Home() {
    const urlParams = new URLSearchParams(window.location.search);
    const qr_code_id = urlParams.get('qr_code_id');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };

            const { data, error } = await supabase.from('qr_scans').insert([{ qr_code_id, ...location }]);
            if (error) {
                console.error('Failed to record scan', error);
            } else {
                // Redirect to original URL after recording the scan
                const { data: qrCodeData, error: qrCodeError } = await supabase.from('qr_codes').select('url').eq('id', qr_code_id).single();
                if (qrCodeError) {
                    console.error('Failed to fetch QR code URL', qrCodeError);
                } else {
                    window.location.href = qrCodeData.url;
                }
            }
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }


window.onload = recordScan;

return (
    <main className={styles.main}>
     <Text>
         oui
     </Text>
    </main>
);
}
