import { Input, ServiceTemplate } from '@/types';

export const generate = ({ projectName }: Input) => {
  const services: ServiceTemplate[] = [];

  services.push({
    type: 'app',
    data: {
      projectName,
      serviceName: 'gstreamer',
      env: [
        `TURN_HOST=panel.streampanel.com`,
        `TURN_PORT=3478`,
        `TURN_USERNAME=yourusername`,
        `TURN_PASSWORD=yourpassword`,
      ].join('\n'),
      source: {
        type: 'image',
        image: 'ghcr.io/selkies-project/selkies-gstreamer/gst-py-example:main-ubuntu22.04',
      },
      domains: [
        {
          host: '$(EASYPANEL_DOMAIN)',
          port: 8080,
        },
      ],
    },
  });

  return { services };
};
